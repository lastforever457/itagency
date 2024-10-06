import { observer } from "mobx-react-lite";

const PartnershipBlock = observer(
  ({ title, description }: { title: string; description: string }) => {
    return (
      <div className={"w-full my-5"}>
        <p
          className={
            "font-bold my-2 border-l-4 pl-2 text-xl border-l-green-500"
          }
        >
          {title}
        </p>
        <div className="text-justify text-[16px]">{description}</div>
      </div>
    );
  },
);

export default PartnershipBlock;
