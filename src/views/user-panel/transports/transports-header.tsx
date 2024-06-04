import { Input } from "@/components/Input/input";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";

export default function TransportsHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-primary text-xl leading-[33px]">Taşımalarım</h1>
      <div className="w-[277px]">
        <Input
          className="h-[44px] text-xs font-light bg-white"
          placeholder="Arayın..."
          icon={faSearch}
          iconClassName="text-xs"
          iconButtonClassName="right-0"
        ></Input>
      </div>
    </div>
  );
}
