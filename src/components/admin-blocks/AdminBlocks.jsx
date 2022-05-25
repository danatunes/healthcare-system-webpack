import { Button } from "../../ui/button/button";

export const Block = ({
  heading1,
  heading1Content,
  heading2,
  heading2Content,
  heading3,
  heading3Content,
}) => {
  return (
    <div className="flex flex-row justify-between items-center py-2 px-4 h-[65px] rounded-xl bg-white my-2 mx-4">
      <div className="flex flex-row space-x-8 items-center">
        <TextBlock fieldHeader={heading1} content={heading1Content} />
        <TextBlock fieldHeader={heading2} content={heading2Content} />
        {heading3 && (
          <TextBlock fieldHeader={heading3} content={heading3Content} />
        )}
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
    <div className="flex flex-col text-center w-[160px] h-fit justify-start items-center">
      <p className="opacity-40 text-sm">{fieldHeader}</p>
      <p className="text-md">{content}</p>
    </div>
  );
};
