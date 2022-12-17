import { Schema, model, models } from "mongoose";
import { Entry } from "../../Interfaces/Entry";

const EntrySchema = new Schema<Entry>({
    data: {
        Project: { type: String, required: true },
        ManagedArea: { type: String, required: true },
        LAS: { type: String, required: true },
        Operator: { type: String, required: true },
        Start: { type: Date, required: true },
        End: { type: Date, required: true },
    },
    userId: {
        type: String,
        required: true,
    },
});

export default models.Entry || model("Entry", EntrySchema);
