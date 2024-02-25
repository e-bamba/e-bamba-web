import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import {Transactions} from "../pages/Home/components";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/Transactions">
        <Transactions transactions={[]}/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;