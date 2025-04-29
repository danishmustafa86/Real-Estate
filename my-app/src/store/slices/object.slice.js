import { db } from "../../config/firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// ——— Thunks ———

// Create
export const createObject = createAsyncThunk(
  "objects/createObject",
  async (objectData, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(db, "posts"), objectData);
      return { id: docRef.id, ...objectData };
    } catch (e) {
      console.error("Error adding document:", e);
      return rejectWithValue(e.message);
    }
  }
);

// Fetch
export const getObjects = createAsyncThunk(
  "objects/getObjects",
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (e) {
      console.error("Error fetching documents:", e);
      return rejectWithValue(e.message);
    }
  }
);

// Delete
export const deleteObject = createAsyncThunk(
  "objects/deleteObject",
  async (objectId, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(db, "posts", objectId));
      return objectId;
    } catch (e) {
      console.error("Error deleting document:", e);
      return rejectWithValue(e.message);
    }
  }
);

// Update
export const updateObject = createAsyncThunk(
  "objects/updateObject",
  async ({ objectId, updatedData }, { rejectWithValue }) => {
    try {
      const ref = doc(db, "posts", objectId);
      await updateDoc(ref, updatedData);
      return { objectId, updatedData };
    } catch (e) {
      console.error("Error updating document:", e);
      return rejectWithValue(e.message);
    }
  }
);

// ——— Slice ———

export const objectSlice = createSlice({
  name: "objects",
  initialState: {
    objects: [],
    loading: false,
    error: null,
  },
  reducers: {
    setObjects(state, action) {
      state.objects = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getObjects.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getObjects.fulfilled, (state, { payload }) => {
        state.objects = payload;
        state.loading = false;
      })
      .addCase(getObjects.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(createObject.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createObject.fulfilled, (state, { payload }) => {
        state.objects.push(payload);
        state.loading = false;
      })
      .addCase(createObject.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(deleteObject.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteObject.fulfilled, (state, { payload }) => {
        state.objects = state.objects.filter(o => o.id !== payload);
        state.loading = false;
      })
      .addCase(deleteObject.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(updateObject.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateObject.fulfilled, (state, { payload }) => {
        const idx = state.objects.findIndex(o => o.id === payload.objectId);
        if (idx !== -1) {
          state.objects[idx] = { ...state.objects[idx], ...payload.updatedData };
        }
        state.loading = false;
      })
      .addCase(updateObject.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { setObjects } = objectSlice.actions;

export default objectSlice.reducer;
