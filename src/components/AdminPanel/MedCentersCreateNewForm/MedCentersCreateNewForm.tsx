import React from 'react';
import { createNewMedCenter } from '@store/actionCreators/medCenters';
import MedCentersForm from '../MedCentersForm/MedCentersForm';
import {
  FormName,
  MedCentersEditFormWrapper,
  MedCentersFormWrapper,
} from '../MedCentersEditForm/MedCentersEditFormStyle';

const MedCentersCreateNewForm: React.FC = () => {
  return (
    <MedCentersEditFormWrapper>
      <MedCentersFormWrapper>
        <FormName>Create new medical center.</FormName>
        <MedCentersForm submitFunction={createNewMedCenter} />
      </MedCentersFormWrapper>
    </MedCentersEditFormWrapper>
  );
};

export default MedCentersCreateNewForm;
