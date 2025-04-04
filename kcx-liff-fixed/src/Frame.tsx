import { Card, CardContent } from "./components/ui/card";
import {
  BookOpen,
  Coins,
  Headphones,
  PiggyBank,
  Search,
  Users,
} from "lucide-react";
import React, { useEffect } from "react";
import liff from "@line/liff";

const topServiceCards = [
  {
    icon: <Users className="h-16 w-16 text-black" />,
    titleChinese: "加入會員",
    titleEnglish: "Join Membership",
  },
  {
    icon: <BookOpen className="h-16 w-16 text-black" />,
    titleChinese: "據點查詢",
    titleEnglish: "Location Search",
  },
  {
    icon: <PiggyBank className="h-16 w-16 text-black" />,
    titleChinese: "點數查詢",
    titleEnglish: "Points Balance Inquiry",
  },
];

const bottomServiceCards = [
  {
    icon: <Search className="h-12 w-12 text-white" />,
    titleChinese: "了解更多",
    titleEnglish: "Learn More",
  },
  {
    icon: <Coins className="h-12 w-12 text-white" />,
    titleChinese: "點數兌換",
    titleEnglish: "Points Redemption",
  },
  {
    icon: <Headphones className="h-12 w-12 text-white" />,
    titleChinese: "真人客服",
    titleEnglish: "Live Customer Service",
  },
];

export default function Frame(): JSX.Element {
  useEffect(() => {
    async function initializeLiff() {
      try {
        await liff.init({ liffId: "2007183090-4a5YRa2R" });
        if (!liff.isLoggedIn()) {
          liff.login();
        }
      } catch (error) {
        console.error("LIFF initialization failed", error);
        alert("LIFF 初始化失敗，請檢查 liffId 或網路連線。");
      }
    }
    initializeLiff();
  }, []);

  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <div className="bg-white overflow-hidden w-full max-w-[800px]">
        <div className="relative">
          <div className="w-full h-[200px] bg-[#2D3034] relative">
            <div className="absolute inset-0 flex justify-center items-center">
              <h1 className="text-[60px] font-bold text-gray-400/80">KCX</h1>
            </div>
            <div className="absolute top-3 left-3 flex flex-col">
              <div className="border border-white w-5 h-5 flex items-center justify-center mb-1">
                <span className="text-white text-[8px]">NO₂</span>
              </div>
              <div className="text-white">
                <p className="font-bold text-[10px]">KochChemie</p>
                <p className="text-[8px]">ExcellenceForExperts.</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-1 px-1 transform translate-y-1/2">
              {topServiceCards.map((service, index) => (
                <Card
                  key={index}
                  className="w-40 h-32 bg-gray-100 border border-white shadow-sm"
                >
                  <CardContent className="flex flex-col items-center justify-center h-full p-2">
                    <div className="mb-1">{service.icon}</div>
                    <h2 className="text-base font-bold text-center">{service.titleChinese}</h2>
                    <p className="text-[8px] text-gray-600 text-center">{service.titleEnglish}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="w-full h-[100px] bg-gradient-to-b from-gray-400 to-gray-600 flex items-end">
            <div className="w-full h-10 bg-gray-700 flex justify-center">
              <div className="w-4/5 flex justify-between items-center">
                {bottomServiceCards.map((service, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="bg-gray-700 rounded-full p-1 mb-1">
                      {service.icon}
                    </div>
                    <h3 className="text-white text-[10px] font-medium text-center">{service.titleChinese}</h3>
                    <p className="text-gray-300 text-[8px] text-center">{service.titleEnglish}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
