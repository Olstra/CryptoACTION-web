import { reactive } from "vue";

type Tx = {
  entryId: number;
  caseDescription: string;
  txList: string[];
};

type Row = {
  address: string;
  risk: "Low" | "Medium" | "High" | string;
  transactions?: Tx | null;
};

export const initialData = reactive<Row[]>([
  {
    address: "bc1ql49ydapnjafl5t2cp9zqpjwe6pdgmxy98859v2",
    risk: "Low",
    transactions: null,
  },
  {
    address: "34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo",
    risk: "High",
    transactions: {
      entryId: 123,
      caseDescription: "Associated with suspicious transfers to mixer",
      txList: ["34xp4v...v4Twseo", "0xTX02...", "0xTX03..."],
    },
  },
  {
    address: "bc1qgdjqv0av3q56jvd82tkdjpy7gdp9ut8tlqmgrpmv24sq90ecnvqqjwvw97",
    risk: "Medium",
    transactions: {
      entryId: 456,
      caseDescription: "Linked to phishing campaign",
      txList: ["0xTX10...", "0xTX11..."],
    },
  },
]);
