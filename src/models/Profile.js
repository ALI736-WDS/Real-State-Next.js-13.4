import { Schema, model, models } from "mongoose";

const profileSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    realState: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    constructionDate: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      enum: ["villa", "apartment", "store", "office"], //bayad yeki az in 4ta bashe ,vagarne az tarighe mongoDB error mide
      required: true,
    },
    amenities: {
      type: [String],
      default: [],
    },
    rules: {
      type: [String],
      default: [],
    },
    userId: {
      type: Schema.Types.ObjectId, //ID karsi ke agahi ro ijad karde : dar mongoDB
      ref: "User", //refrence az model User dar mongoDB
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } //hardoye createDate va createAt hast: new Date()
);

const Profile = models.Profile || model("Profile", profileSchema);

export default Profile;
