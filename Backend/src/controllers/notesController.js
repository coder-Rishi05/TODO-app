
export const getAllNotes = async (req, res) => {
  // send the notes
  res.status(200).send("You fetched the notes.");
}

export const createNotes = async (req,res)=>{
     res.status(201).json({ message: "notes created successfully." });
    console.log(res);
}
export const updateNotes = async(req, res) => {
  res.status(200).json({ message: "notes updated successfully." });
}
export const deleteNotes = async (req, res) => {
  res.status(200).json({ message: "notes deleted successfully." });
}

