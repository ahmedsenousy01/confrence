const summitModel = require("../models/summit.model");
const userModel = require("../models/user.model");

const getAllConfrences = async (req, res) => {
  const summits = await summitModel.find({});
  return res.json({ message: 'summits found', summits });
}

const getConfrenceById = async (req, res) => {
  const { id } = req.params;
  const summit = await summitModel.findById({ _id: id });
  return res.json({ message: 'summit found', summit });
}

const registerToConfrence = async (req, res) => {
  const userId = req.body.id;
  const summitId = req.params.id;
  const summit = await summitModel.findById({ _id: summitId });
  const user = await userModel.findById({ _id: userId });
  if (user.registeredSummits.includes(summitId)) return res.json({ message: 'event already registered' });
  await summitModel.findByIdAndUpdate({ _id: summitId }, { numberOfAttendees: ++summit.numberOfAttendees });
  console.log(summit);
  await userModel.findByIdAndUpdate({ _id: userId }, { registeredSummits: [...user.registeredSummits, summit._id] });
  const user2 = await userModel.findById({ _id: userId });
  console.log(user2);
  return res.json({ message: 'registered successfully' });
}

const deleteRegistration = async (req, res) => {
  const userId = req.body.id;
  const summitId = req.params.id;
  const summit = await summitModel.findById({ _id: summitId });
  await summitModel.findByIdAndUpdate({ _id: summitId }, { numberOfAttendees: --summit.numberOfAttendees });
  console.log(summit._id);
  const user = await userModel.findById({ _id: userId });
  await userModel.findByIdAndUpdate(
    { _id: userId },
    { registeredSummits: user.registeredSummits.filter((summit) => !summit._id.equals(summitId)) }
  );
  const user2 = await userModel.findById({ _id: userId });
  console.log(user2);
  return res.json({ message: 'deleted successfully' });
}

module.exports = {
  registerToConfrence,
  getAllConfrences,
  getConfrenceById,
  deleteRegistration
}