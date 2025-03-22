import Image from "next/image";
import { Card, Space } from "antd";

const CardData = [
  {
    title: "Fixed Monthly Rate",
    desc: "No hidden fees, pay the same price every month.",
    pic: "/images/15.png",
  },
  {
    title: "Fixed Monthly Rate",
    desc: "No hidden fees, pay the same price every month.",
    pic: "/images/15.png",
  },
  {
    title: "Fixed Monthly Rate",
    desc: "No hidden fees, pay the same price every month.",
    pic: "/images/15.png",
  },
  {
    title: "Fixed Monthly Rate",
    desc: "No hidden fees, pay the same price every month.",
    pic: "/images/15.png",
  },
  {
    title: "Fixed Monthly Rate",
    desc: "No hidden fees, pay the same price every month.",
    pic: "/images/15.png",
  },
];

function CardV() {
  return (
    <>
      <section className="flex justify-center py-8 px-4">
        <Space direction="vertical" size={16} className="w-full" style={{ maxWidth: "600px" }}>
          {CardData.map((data, index) => (
            <Card 
              key={index} 
              className="bg-blue-400 w-full"
              bodyStyle={{ padding: "16px" }}
            >
              <div className="flex flex-col items-center sm:items-start">
                <div className="mb-4">
                  <Image 
                    src={data.pic} 
                    alt="" 
                    height={60} 
                    width={60} 
                    className="object-contain"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-xl sm:text-2xl font-bold p-2 sm:pl-0">{data.title}</h1>
                  <h2 className="text-base sm:text-lg font-semibold pl-2 sm:pl-0">{data.desc}</h2>
                </div>
              </div>
            </Card>
          ))}
        </Space>
      </section>
    </>
  );
}

export default CardV;