import React from "react";
import { UseFormRegister } from "react-hook-form";
import { ConversationSearchProps } from "@/schemas/conversation.schema";

type Props = {
  register: UseFormRegister<ConversationSearchProps>;
  domains?:
    | {
        name: string;
        id: string;
        icon: string;
      }[]
    | undefined;
};

const ConversationSearch = ({ register, domains }: Props) => {
  return (
    <div className="flex flex-col py-3">
      <select
        {...register("domain")}
        defaultValue=""
        className="px-3 py-4 text-sm border-[1px] rounded-lg mr-5"
      >
        <option value="" disabled>
          Domain name
        </option>
        {domains?.map((domain) => (
          <option value={domain.id} key={domain.id}>
            {domain.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ConversationSearch;
