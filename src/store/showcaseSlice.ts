import { createSlice } from "@reduxjs/toolkit";
import { IGallery } from "../components/Gallery/types";

const initialState: {galleries: IGallery[]} = {
    galleries: [
        {
          title: "1 title",
          cards: [
            { title: "Card Title", description: "Card Description", link: "/" },
            { title: "Card Title", description: "Card Description", link: "/" },
            { title: "Card Title", description: "Card Description", link: "/" },
            { title: "Card Title", description: "Card Description", link: "/" },
            { title: "Card Title", description: "Card Description", link: "/" },
          ],
        },
        {
          title: "1 title",
          cards: [
            { title: "Card Title", description: "Card Description", link: "/" },
            { title: "Card Title", description: "Card Description", link: "/" },
            { title: "Card Title", description: "Card Description", link: "/" },
            { title: "Card Title", description: "Card Description", link: "/" },
            { title: "Card Title", description: "Card Description", link: "/" },
          ],
        },
      ]
}

export const showcaseSlice = createSlice({
    name: 'showcase',
    initialState,
    reducers: {
    }
})

export default showcaseSlice.reducer