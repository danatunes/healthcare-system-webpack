import { List } from "../../components";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { Button } from "../../ui/button/button";

export const Clinics = () => {
  return (
    <List
      styleList="rounded-xl"
      header={
        <div className="flex flex-row justify-between">
          <h3 className="font-medium text-xl">Hospital Admin</h3>
          <div className="flex flex-row justify-between items-center space-x-5">
            <PlusCircleIcon className="w-7 text-[#3A57E8]" />
            <p className="font-bold text-lg text-[#3A57E8]">Add new Admin</p>
          </div>
        </div>
      }
      styleList="w-full"
    >
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
    </List>
  );
};

const Block = () => {
  return (
    <div className="flex flex-row justify-between items-center py-2 px-4 h-[65px] rounded-xl bg-white my-2 mx-4">
      <div className="flex flex-row space-x-8">
        <TextBlock fieldHeader="Name" content="Vin Diesel" />
        <TextBlock fieldHeader="Hospital" content="GreenClinic" />
      </div>
      <div className="space-x-4">
        <Button name="Edit" style="w-20 rounded-3xl	bg-blue" />
        <Button name="Delete" style="w-20 rounded-3xl bg-red-600" />
      </div>
    </div>
  );
};

const TextBlock = ({ fieldHeader, content }) => {
  return (
    <div className="flex flex-col justify-start items-center">
      <p className="opacity-40 text-sm">{fieldHeader}</p>
      <p className="text-md">{content}</p>
    </div>
  );
};
