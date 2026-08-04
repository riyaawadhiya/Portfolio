import mongoose from "mongoose";

/**
 * Schema lives here, in the repository — this file owns everything
 * related to how an enquiry is shaped and stored.
 */
const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
    subject: { type: String, trim: true, maxlength: 160, default: "New portfolio enquiry" },
    message: { type: String, required: true, trim: true, maxlength: 3000 },
    emailSent: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Enquiry = mongoose.model("Enquiry", enquirySchema);

const contactRepository = {
  /** Create and persist a new enquiry document. */
  async create(data) {
    return Enquiry.create({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    });
  },

  /** Mark an enquiry as successfully emailed. */
  async markEmailSent(id) {
    return Enquiry.findByIdAndUpdate(id, { emailSent: true }, { new: true });
  },

  /** List all enquiries, most recent first — used by a simple admin view. */
  async findAll() {
    return Enquiry.find().sort({ createdAt: -1 });
  },
};

export default contactRepository;
