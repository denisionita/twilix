import CreativeAgencyMain from '@/pages/homes/creative-agency/CreativeAgencyMain';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twilix - Creative Marketing Agency",
};

export default function Home() {
  return (
    <CreativeAgencyMain />
  );
}
