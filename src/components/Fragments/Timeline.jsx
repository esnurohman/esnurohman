import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
} from "flowbite-react";
import Header from "../Elements/Header";

export function Mytimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <Header>
            SMA Negeri 1 Purwareja Klampok - Ilmu Pengetahuan Sosial
          </Header>
          <TimelineTime>Lulus 2018</TimelineTime>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <Header>Universitas Amikom Purwokerto - Informatika</Header>
          <TimelineTime>2018 - Sekarang</TimelineTime>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
