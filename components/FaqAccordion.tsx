import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from "@chakra-ui/react";

const questions = [
  {
    id: 1,
    title: "What is IVF?",
    body: "In vitro fertilization means fertilization outside of the body. It is a form of treatment to assist couples with fertility problems to have a baby. The female partner receives external hormones so that more follicles form in the ovaries. The egg cells grow within these follicles. Eventually, they are removed from the follicles (harvested using a needle through the vagina) and united with the partner’s sperm cells under laboratory conditions. Therefore, the fertilization occurs outside of the woman’s body. After fertilization, the embryos are cultured in a nutrient solution for a maximum of 5 days. The embryos develop to a multicellular stage and are implanted (maximum 2 to 3 embryos) into the uterus{womb} where they continue to develop.The resulting pregnancy is in no way different from a spontaneous pregnancy. IVF can be an infertility treatment option when the man has a low sperm count, the woman has problems with the uterus or fallopian tubes, or the reason for infertility is unexplained.",
  },
  {
    id: 2,
    title:
      "How long should a couple try to conceive naturally before consulting a fertility specialist?",
    body: "Every couple is different, but if you haven’t conceived after trying for 12 months, seeking an opinion from a fertility specialist is a great idea. For women over 35, we typically recommend coming in a bit earlier – after 6-9 months. This is because a specialist can give personalised advice about diet, lifestyle, preconception nutrition and ovarian reserve testing that can optimise your chances. Whatever you decide, getting an outside perspective can be a helpful exercise.",
  },
  {
    id: 3,
    title: "Does it hurt to take eggs out?",
    body: "Oocyte (egg) retrieval is a procedure in which eggs are taken out of your ovaries. It is one of the steps in the IVF process. It involves ultrasound guided drainage of follicles through the vagina. Oocyte recovery needles are used for this procedure. It is suppose to be a painful procedure. However, in many centres it is usually not painful because it is done under sedation/ light anaesthesia (sleep). Anaesthetic nurses/ doctors make sure there is optimal pain coverage during the procedure and we additionally supplement with pain relieving medications after the procedure.",
  },
  {
    id: 4,
    title: "What happens during oocyte (egg retrieval)?",
    body: "Your vagina will be cleaned. Once you are sedated, the doctor will use an ultrasound to locate your ovaries. A needle is then guided to one of your ovaries. The needle is connected to a suction device and test tube. The doctor will insert the needle into a follicle, which contains an egg, and aspirates the egg and surrounding fluid into the needle. The egg will move from the needle to the test tube. This process is repeated with other follicles and in your other ovary. The procedure takes about 10-30 minutes depending on the number of follicles to be aspirated. You will then be taken to the recovery room and allowed to rest for a few hours.",
  },
  {
    id: 5,
    title: "What is ICSI?",
    body: "Intra-cytoplasmic sperm injection (ICSI) is a procedure where a single sperm is injected directly into the matured egg. It is used as part of IVF treatment, it may be helpful in cases where there is poor sperm quality or where fertilisation cannot occur due to changes in the egg’s membrane. ICSI may be recommended when there is a reason to suspect that achieving fertilization may be difficult. ICSI is important in male factor infertility like low sperm counts, poor motility or movement of the sperm, poor sperm quality, sperm that lack the ability to penetrate an egg, or when sperm is retrieved surgically in cases of azoospermia. Essentially, ICSI helps to improve fertilisation rates and therefore provide hope for couple with poor semen parameters.",
  },
  {
    id: 6,
    title: "What if I don’t respond to the drugs for ovarian stimulation?",
    body: "A woman’s response to ovarian stimulation depends on a number of different factors, such as the available eggs in the ovarian pool, appropriate hormone levels, proper administration of any medications and lifestyle/environmental factors. A woman must have good ovarian reserve; that is, she must have eggs available to respond. A woman who has diminished ovarian reserve is identified by a high blood levels of follicle stimulation hormone (FSH), low blood levels of anti Mullerian hormone (AMH) or a low antral follicle count on ultrasound. Such a woman may have a poor or no response to stimulation. For such patients, an alternate stimulation protocol may be tried or donated eggs may be used (from a woman known or unknown to the patient). Optimizing weight, diet and stress and cessation of use of tobacco, alcohol and recreational substances can also improve a response to ovarian stimulation. Speak to your gynaecologist/fertility expert regarding improving your particular response to ovarian stimulation.",
  },
  {
    id: 7,
    title: "Does sperm leakage after sexual intercourse affect fertility?",
    body: "NO. The leakage of semen from the vagina after sexual intercourse is very normal, and it applies to every woman irrespective of whether or not they have fertility challenges. However the infertile women are most likely to take note of the leakage probably in an attempt to adduce a reason for the infertility. The roof of the vagina ends blindly except for a small opening in the cervix. In a normal male ejaculate, there are between 15 and 400 million sperm cells. All you need to get pregnant is just one. What normally happens after intercourse, is that a lot of the ejaculate does leak out. Some of it, however, remains in the vagina, while even smaller amount makes its way up through the cervix, into the uterus and down the fallopian tubes. It is here, in the fallopian tubes, that the sperm and egg meet. So, the bottom line is that you don’t need to lie in bed with your legs up after intercourse to get pregnant and the fact that semen is leaking out afterwards, doesn’t decrease your chances of getting pregnant. ICSI may be recommended when there is a reason to suspect that achieving fertilization may be difficult. ICSI is important in male factor infertility like low sperm counts, poor motility or movement of the sperm, poor sperm quality, sperm that lack the ability to penetrate an egg, or when sperm is retrieved surgically in cases of azoospermia. Essentially, ICSI helps to improve fertilisation rates and therefore provide hope for couples with poor semen parameters.",
  },
  {
    id: 8,
    title: "Does Intercourse position matter?",
    body: "A woman’s response to ovarian stimulation depends on a number of different factors, such as the available eggs in the ovarian pool, appropriate hormone levels, proper administration of any medications and lifestyle/environmental factors. A woman must have good ovarian reserve; that is, she must have eggs available to respond. A woman who has diminished ovarian reserve is identified by a high blood levels of follicle stimulation hormone (FSH), low blood levels of anti Mullerian hormone (AMH) or a low antral follicle count on ultrasound. Such a woman may have a poor or no response to stimulation. For such patients, an alternate stimulation protocol may be tried or donated eggs may be used (from a woman known or unknown to the patient). There’s no proof that certain lovemaking positions, such as having a pillow under your bottom to tilt your uterus or keeping your legs in the air afterwards, can increase your chances of getting pregnant. The most important hing is the delivery of semen containing good quality sperm cell into the vagina at the appropriate time. Normal sperm cells have the ability to swim fast enough without the help of gravity. Therefore, the frequency and timing of intercourse are key.",
  },
  {
    id: 9,
    title: "Is Vaginal Discharge Normal?",
    body: "Most of the time vaginal discharge is normal. The discharge is your body’s way of cleaning itself and helps to prevent infection. The amount, colour, texture and smell of the discharge vary depending on the time of the menstrual cycle. Normal vaginal discharge is clear or slightly cloudy, non-irritating, and odor-free. Abnormal discharge may be yellow or green, chunky in consistency, foul smelling, irritating / itchy or blood stained. See your doctor if you suspect that you have an abnormal discharge. Good vaginal health involves avoiding douching and use of foaming and scented soaps in the vagina, as well as practicing safe sex.",
  },
  {
    id: 10,
    title: "What is Timed Intercourse?",
    body: "Timed intercourse is a simple, inexpensive, low risk treatment to help couples find out their most fertile window in order for them to schedule intercourse. It’s a proven, natural method of increasing a woman’s chances of conceiving a baby and it is often the starting point of a couple’s fertility journey. A woman’s peak fertility window is prior to and during ovulation. A woman is fertile approximately five days before she ovulates until 24 hours after ovulation. This 6-day ovulation window period is when the woman has the highest potential to get pregnant. This is due to the limited survival times of the sperm and egg in each menstrual cycle. The sperm lifespan is 2-5 days, while the egg’s life span is 24-36 hours. Timed intercourse is only effective for women who have patent Fallopian tubes, normal uterine cavity and normal sperm parameters.",
  },
];

function FaqAccordion() {
  return (
    <>
      <Accordion allowToggle>
        {questions.map((item) => {
          return (
            <AccordionItem key={item.id}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {item.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{item.body}</AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}

export default FaqAccordion;
