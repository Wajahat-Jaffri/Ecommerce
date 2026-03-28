import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (formData) => {
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      formData,
      {
        withCredentials: true,
      },
    );

    return response.data;
  },
);

export const loginUser = createAsyncThunk("auth/login", async (formData) => {
  const response = await axios.post(
    "http://localhost:5000/api/auth/login",
    formData,
    {
      withCredentials: true,
    },
  );

  return response.data;
});


export const logoutUser = createAsyncThunk("auth/logout", async () => {
  const response = await axios.post(
    "http://localhost:5000/api/auth/logout",
  
    {
      withCredentials: true,
    },
  );

  return response.data;
});


export const checkAuth = createAsyncThunk("auth/check-auth", async () => {
  const response = await axios.get(
    "http://localhost:5000/api/auth/check-auth",
    {
      withCredentials: true,
    },
  );

  return response.data;
});
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = !!action.payload?.success;
        state.user = action.payload?.user ?? null;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = !!action.payload?.success;
        state.user = action.payload?.user ?? null;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      })
     .addCase(logoutUser.pending, (state) => {
  state.isLoading = true;
})
.addCase(logoutUser.fulfilled, (state) => {
  state.isLoading = false;
  state.isAuthenticated = false;
  state.user = null;
})
.addCase(logoutUser.rejected, (state) => {
  state.isLoading = false;
})
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = !!action.payload?.success;  
        state.user = action.payload?.user ?? null;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      })
      
      ;
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   isAuthenticated: false,
//   isLoading: true,
//   user: null,
// };

// axios.defaults.withCredentials = true;

// // LOGIN
// export const loginUser = createAsyncThunk("auth/login", async (formData) => {
//   const res = await axios.post("http://localhost:5000/api/auth/login", formData);
//   return res.data;
// });

// // LOGOUT
// export const logoutUser = createAsyncThunk("auth/logout", async () => {
//   const res = await axios.post("http://localhost:5000/api/auth/logout");
//   return res.data;
// });

// // CHECK AUTH
// export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
//   const res = await axios.get("http://localhost:5000/api/auth/check-auth");
//   return res.data;
// });

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // LOGIN
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.isAuthenticated = true;
//         state.user = action.payload.user;
//         state.isLoading = false;
//       })

//       // LOGOUT
//       .addCase(logoutUser.fulfilled, (state) => {
//         state.isAuthenticated = false;
//         state.user = null;
//         state.isLoading = false;
//       })

//       // CHECK AUTH
//       .addCase(checkAuth.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(checkAuth.fulfilled, (state, action) => {
//         state.isAuthenticated = true;
//         state.user = action.payload.user;
//         state.isLoading = false;
//       })
//       .addCase(checkAuth.rejected, (state) => {
//         state.isAuthenticated = false;
//         state.user = null;
//         state.isLoading = false;
//       });
//   },
// });

// export default authSlice.reducer;