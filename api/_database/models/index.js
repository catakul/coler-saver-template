import mongoose from "mongoose";
import { UserSchema } from "./User";
import { PaletteSchema } from "./Palette";

export const User = mongoose.model("User", UserSchema, "users");
export const Palette = mongoose.model("Palette", PaletteSchema, "palettes");
