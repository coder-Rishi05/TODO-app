import Note from "../../models/Notes.js";

export const getAllNotes = async (req, res) => {
  // send the notes
  try{
    const notes = await Note.find()
    
    res.status(200).json(notes);
    // res.status(200).send("You fetched the notes.");
  }catch(error){
    // console.log("error in getting data controller ", error)
    res.status(500).json("internal server error", error)
  }
}

export const createNotes = async (req,res)=>{

  try{
    const {title,content} = req.body
    console.log({title,content})
  }catch(error){

  }
  
  
}
export const updateNotes = async(req, res) => {
  res.status(200).json({ message: "notes updated successfully." });
}
export const deleteNotes = async (req, res) => {
  res.status(200).json({ message: "notes deleted successfully." });
}

