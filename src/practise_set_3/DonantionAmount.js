export function DonantionAmount({ donationData }) {
  const totalAmount = () =>
    donationData.reduce(
      (totalSum, { Donation }) => totalSum + Donation,
      0
    );
  return <div>Total Donation Collected: {totalAmount()}</div>;
}
