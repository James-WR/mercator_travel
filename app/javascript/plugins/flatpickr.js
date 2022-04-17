// flatpickr.js provides a nicer UX for picking dates on a form.

import flatpickr from "flatpickr"
require("flatpickr/dist/flatpickr.min.css")
import rangePlugin from "flatpickr/dist/plugins/rangePlugin"

flatpickr("#start_date", {
  altInput: true,
  "plugins": [new rangePlugin({ input: "#end_date" })]
});
