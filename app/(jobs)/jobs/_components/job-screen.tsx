"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RunnerList } from "./runner-list";

export const JobScreen = () => {
  return (
    <Tabs defaultValue="runner" className="w-11/12 mx-auto">
      <TabsList className="grid w-full grid-cols-2 p-1 bg-pink-100 rounded-t-lg">
        <TabsTrigger 
          value="runner"
          className="py-2 text-sm font-medium transition-all data-[state=active]:bg-pink-500 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md"
        >
          Runner
        </TabsTrigger>
        <TabsTrigger 
          value="carrier"
          className="py-2 text-sm font-medium transition-all data-[state=active]:bg-pink-500 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md"
        >
          Carrier
        </TabsTrigger>
      </TabsList>
      <TabsContent value="runner" className="bg-white p-4 rounded-b-lg shadow-md">
        <RunnerList />
      </TabsContent>
      <TabsContent value="carrier" className="bg-white p-4 rounded-b-lg shadow-md">
        {/* {carrierComponent} */}
      </TabsContent>
    </Tabs>
  );
};
