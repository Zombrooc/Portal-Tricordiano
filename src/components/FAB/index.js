import { FABWrapper } from "./styles";

import {
  PlusIcon,
} from "@heroicons/react/outline";

const FAB = ({ handleModal }) => {
  return (
    <FABWrapper onClick={handleModal}>
      {/* // Plus Icon */}
      <PlusIcon style={{width: '1.5rem', height: '1.5rem'}}/>
        
    </FABWrapper>
  );
};

export default FAB;
