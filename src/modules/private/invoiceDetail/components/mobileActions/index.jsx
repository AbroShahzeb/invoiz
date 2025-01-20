import { Button } from "../../../../../generalComponents";
export const MobileAction = ({ invoice }) => {
  return (
    <div className="md:hidden flex items-center gap-2 justify-between fixed bottom-0 left-0 right-0 p-6 bg-white dark:bg-dark-700">
      <Button variant="tertiary" label="Edit" />
      <Button variant="danger" label="Delete" />
      <Button label="Mark as Paid" />
    </div>
  );
};
