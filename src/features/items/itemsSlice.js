import {createSlice} from '@reduxjs/toolkit';

//Importing item images
import Image1 from "../../components/images/item-image1.jpg";
import Image2 from "../../components/images/item-image2.jpg";
import Image3 from "../../components/images/item-image3.jpg";
import Image4 from "../../components/images/item-image4.jpg";
import Image5 from "../../components/images/item-image5.jpg";
import Image6 from "../../components/images/item-image6.jpg";
import Image7 from "../../components/images/item-image7.jpg";
import Image8 from "../../components/images/item-image8.jpg";
import Image9 from "../../components/images/item-image9.jpg";
import Image10 from "../../components/images/item-image10.jpg";
import Image11 from "../../components/images/item-image11.jpg";
import Image12 from "../../components/images/item-image12.jpg";
import Image13 from "../../components/images/item-image13.jpg";

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const initialState = [
    {id: "1", image: Image1, title: 'Couple', info: `Event1   ${lorem}`},
    {id: "2", image: Image2, title: 'Two Men', info: `Event2   ${lorem}`},
    {id: "3", image: Image3, title: 'Sunrise', info: `Event3   ${lorem}`},
    {id: "4", image: Image4, title: 'Hanabatake', info: `Event4   ${lorem}`},
    {id: "5", image: Image5, title: 'Pain', info: `Event5   ${lorem}`},
    {id: "6", image: Image6, title: 'Shadow', info: `Event6   ${lorem}`},
    {id: "7", image: Image7, title: 'Guy', info: `Event7   ${lorem}`},
    {id: "8", image: Image8, title: 'F**k', info: `Event8   ${lorem}`},
    {id: "9", image: Image9, title: 'Lady', info: `Event9   ${lorem}`},
    {id: "10", image: Image10, title: 'Umbrella', info: `Event10   ${lorem}`},
    {id: "11", image: Image11, title: 'Glow', info: `Event11   ${lorem}`},
    {id: "12", image: Image12, title: 'Soccer', info: `Event12   ${lorem}`},
    {id: "13", image: Image13, title: 'Sunset', info: `Event13   ${lorem}`},
]

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
    }
});

export default itemsSlice.reducer;



