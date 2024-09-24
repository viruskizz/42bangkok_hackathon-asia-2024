type TJobItem = {
  type: "R" | "C";
  data: {
    id: string;
    type: "R" | "C";
    dropoff: {
      id: string;
      name: string;
    };
    // ======= runner
    itemCount: string;
    distance: string;
    orders: [
      {
        id: string;
        location: string;
        items: [
          {
            id: string;
            name: string;
            quantity: string;
          }
        ];
      }
    ];
    // ======= carrier
    batchId: string;
    pickup: {
      id: string;
      name: string;
    };
    timeline: {
      standby: string;
      trainline: [
        {
          time: string;
          name: string;
        }
      ];
      dropoff: {
        time: string;
        name: string;
      };
    };
  };
};