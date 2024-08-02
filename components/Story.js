import React from "react";

const Story = () => {
  return (
    <>
      <div className="h-full  flex flex-col gap-6">
        <div className="flex flex-col gap-6 px-72 py-24">
          <h1 className=" font-bold text-5xl text-center text-[#27272A]">
            Our Story
          </h1>
          <p className="font-normal text-xl text-center">
            We built a piece of software that we planned to use for a
            pharmacist-led Covid19 drive-through vaccination clinic but never
            got to use it.{" "}
          </p>
          <p className="font-bold italic text-2xl text-center">
            “So we repurposed it and made it even more powerful”
          </p>
        </div>
        <table className='m-20'>
          <tbody >
            <tr >
              <td className='w-1/3 align-top'>
                <h1 className="font-bold text-4xl text-[#27272A]">
                  Problem we faced
                </h1>
              </td>
              <td>
                <div className="flex flex-col gap-6">
                  <p>
                    It was a typical day on the 6th of August 2021. We got a
                    call from the local health authorities that a covid positive
                    patient had visited our pharmacy 3 days ago. They asked all
                    staff working in the last three days to isolate for 14 days.
                    We were required to pay a few thousand dollars in a deep
                    cleaning bill before reopening. It happened a couple of
                    times. It was not like we could wave a magic wand and get
                    extra team members. We had to shut one of our pharmacies
                    down for at least ten days.
                  </p>
                  <p>
                    Red tape rule one said that pharmacists were only allowed to
                    vaccinate in a closed room in the pharmacy. We could not
                    vaccinate outside this room. Red tape rule two required us
                    to claim a small amount of money to vaccinate a person, but
                    the condition was that you could only claim this payment if
                    the vaccination was done on pharmacy premises.
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="p-16 font-bold text-3xl gap-6  text-[#52525B]">
                “Why don’t we vaccinate the members of the public in the empty
                car park at the back of our pharmacy?”
              </td>
            </tr>
            <tr>
            <td className='w-1/3 align-top'>
            {" "}
                <h1 className="font-bold text-4xl text-[#27272A]">
                  Amazing in-store journey
                </h1>
              </td>
              <td>
              <div className="flex flex-col gap-6">
              <p>
                    While isolating in early August, we thought, why don’t we
                    vaccinate the members of the public in the empty car park at
                    the back of our pharmacy? It will be safer for our team as
                    patients are completing their post vaccination wait in their
                    car and if they are sick then the exposure to our team is
                    limited. Our local Council was very supportive and permitted
                    us. They even sent their team that built the tents to start
                    working.
                  </p>
                  <p>
                    We lobbied hard to get the rules changed. They eventually
                    got changed, but by then, it was too late. It was a chaotic
                    experience and full of red tape.
                  </p>
                  <p>
                    So the tool built to allow an 11-member team to successfully
                    vaccinate 700 cars (1000 people) was useless. But then we
                    started using it for our in-store pharmacy workflow. It
                    proved successful in managing the flow. It was so easy to
                    use and allowed us to vaccinate patients using an amazing
                    instore journey. This was how we built ConcertRx.
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <div className="flex p-20 gap-36">
          <h1 className="font-bold text-4xl text-[#27272A]">
            Problem we faced
          </h1>
          <div className="flex flex-col gap-6">
            <p>
              It was a typical day on the 6th of August 2021. We got a call from
              the local health authorities that a covid positive patient had
              visited our pharmacy 3 days ago. They asked all staff working in
              the last three days to isolate for 14 days. We were required to
              pay a few thousand dollars in a deep cleaning bill before
              reopening. It happened a couple of times. It was not like we could
              wave a magic wand and get extra team members. We had to shut one
              of our pharmacies down for at least ten days.
            </p>
            <p>
              Red tape rule one said that pharmacists were only allowed to
              vaccinate in a closed room in the pharmacy. We could not vaccinate
              outside this room. Red tape rule two required us to claim a small
              amount of money to vaccinate a person, but the condition was that
              you could only claim this payment if the vaccination was done on
              pharmacy premises.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 border-y border-[#A1A1AA] text-[#52525B]">
          <h3>
            “Why don’t we vaccinate the members of the public in the empty car
            park at the back of our pharmacy?”
          </h3>
        </div> */}
      </div>
    </>
  );
};

export default Story;
