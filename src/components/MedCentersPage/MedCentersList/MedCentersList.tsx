import React from 'react';
import { MedCentersListWrapper } from './MedCentersListStyle';
import MedCenter from './MedCenter/MedCenter';
import Loader from '@components/common/Loader/Loader';

interface IMedCenterListPros {
  error: null | string;
  loading: boolean;
  medCenters: any[];
}

const MedCentersList: React.FC<IMedCenterListPros> = ({
  error,
  medCenters,
  loading
}) => {
  if (error) return <h1>{error} </h1>;

  return (
    <MedCentersListWrapper loading={loading}>
      {loading ? (
        <Loader />
      ) : (
        medCenters.map((medCenter) => {
          return <MedCenter key={medCenter.id} {...medCenter} />;
        })
      )}
    </MedCentersListWrapper>
  );
};

export default MedCentersList;
