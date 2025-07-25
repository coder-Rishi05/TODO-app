
export const getAllNotes = async (req, res) => {
  // send the notes
  res.status(200).send("You fetched the notes.");
}