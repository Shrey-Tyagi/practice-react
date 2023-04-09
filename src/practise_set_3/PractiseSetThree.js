import {
  donationData,
  cars,
  bouquet,
  cartoons,
  vegetables,
  studentData,
} from './data';
import { Img } from './Img';
import { CartoonsDetails } from './CartoonsDetails';
import { CartoonsEvenMagnitude } from './CartoonsEvenMagnitude';
import { CartoonsWithSuperpowerX } from './CartoonsWithSuperpowerX';
import { Vegetables } from './Vegetables';
import { BouquetWithRose } from './BouquetWithRose';
import { FlowersOfBouquetPriceAbove2000 } from './FlowersOfBouquetPriceAbove2000';
import { DonantionAmount } from './DonantionAmount';
import { CarCatogories } from './CarCatogories';
import { StudentCertificationApproval } from './StudentCertificationApproval';

export function PractiseSetThree() {
  return (
    <div>
      <Img
        url="https://picsum.photos/200"
        height={'300px'}
        width={'300px'}
      />
      <hr />
      <CartoonsDetails cartoons={cartoons} />
      <hr />
      <CartoonsEvenMagnitude cartoons={cartoons} />
      <hr />
      <CartoonsWithSuperpowerX
        cartoons={cartoons}
        superpowerToCheck={'Intelligence'}
      />
      <hr />
      <Vegetables vegetables={vegetables} />
      <hr />
      <BouquetWithRose bouquet={bouquet} />
      <hr />
      <FlowersOfBouquetPriceAbove2000 bouquet={bouquet} />
      <hr />
      <DonantionAmount donationData={donationData} />
      <hr />
      <CarCatogories cars={cars} />
      <hr />
      <StudentCertificationApproval studentData={studentData} />
      <hr />
    </div>
  );
}
