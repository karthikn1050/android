const mongoose = require("mongoose");

const inspectConfigSchema = new mongoose.Schema({
  sno_insert: {
    type: String,
  },
  sno_tube: {
    type: String,
  },
  model_no: {
    type: String,
  },
  dcat_no: {
    type: String,
  },
  image: {
    type: String,
  },
  result_image: {
    type: String,
  },
  status: {
    type: String,
  },
  message: {
    type: String,
  },
});

const InspectConfig = mongoose.model("InspectConfig", inspectConfigSchema);

module.exports = InspectConfig;
