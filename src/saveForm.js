const FormModel = require("./formModel");


const saveForm = (req, res) => {
  // console.log(req.body)
  const form = new FormModel({
    form: req.body
  });
  form.save()

  res.sendStatus(200)
}

module.exports = saveForm;

// const data = {"type":"header",
// "subtype":"h1",
// "label":"formBuilder in Check",
// "access":false}
// ,
// {
// "type":"paragraph",
// "subtype":"p",
// "label":"This is a demonstration of formBuilder running in a React project.",
// "access":false
// },
// {
// "type":"text",
// "required":false,
// "className":"form-control",
// "name":"text-1716267994444-0",
// "access":false,
// "subtype":"text"
// }