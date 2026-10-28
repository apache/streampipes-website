import React from 'react';
import UseCasePage from '../../components/usecases/UseCasePage';
import {useCases} from '../../components/usecases/data';

export default function Page() {
  return <UseCasePage useCase={useCases.find(u => u.slug === 'machine-state-tracking')!} />;
}
