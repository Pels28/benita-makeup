import Button from "@/components/Button"
import Input from "@/components/Input"
import TextArea from "@/components/TextArea"
import { Divider } from "@heroui/react"
import { Formik } from "formik"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6"
import * as Yup from "yup";

const Contact = () => {
    return   <section
    id="contact"
    className="relative min-h-[800px] md:min-h-[1080px] py-8 md:py-12 flex items-center justify-center"
  >
    {/* Video Background */}
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/paint.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40"></div>
    </div>

    {/* Content Overlay */}
    <div
      className="z-10 text-center my-10 md:my-28 bg-black flex flex-col items-center gap-4 md:gap-5 py-6 md:py-12 text-white px-4 w-[90%] md:w-[50%] mx-auto"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <Divider className="w-8 md:w-12 text-white rounded-sm bg-white h-1" />
      <div
        className="font-alexBrush text-4xl md:text-6xl"
        data-aos="fade-down"
        data-aos-delay="150"
      >
        Visit Us
      </div>
      <div
        className="space-y-2"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <div className="font-playfairDisplay text-sm md:text-base">
          500 Terry France street, San Francisco, CA9418
        </div>
        <div className="font-playfairDisplay text-sm md:text-base">
          info@email.com / Tel: 0549572211
        </div>
      </div>
      <div
        className="space-y-2"
        data-aos="fade-left"
        data-aos-delay="250"
      >
        <div className="font-cormorant text-2xl md:text-4xl">
          Opening Hours
        </div>
        <div className="font-cormorant text-sm md:text-base">
          Mon-Fri: 7am-10pm | Sat: 8am-10pm | Sun: 8am-11pm
        </div>
      </div>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        }}
        validateOnBlur
        validateOnChange={false}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .trim()
            .required("First name is required"),
          lastName: Yup.string()
            .trim()
            .required("Last name is required"),
          email: Yup.string()
            .trim()
            .email()
            .required("Email is required"),
          phone: Yup.string()
            .trim()
            .required("Phone number is required"),
          message: Yup.string().trim().required("Message is required"),
        })}
        onSubmit={async () => {}}
      >
        {({
          values,
          touched,
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form
            className="font-playfairDisplay w-full mt-4"
            onSubmit={handleSubmit}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex flex-col gap-3 md:gap-5 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 w-full">
                <div data-aos="fade-right" data-aos-delay="350">
                  <Input
                    radius="none"
                    size="md"
                    type="text"
                    placeholder="First name"
                    label="First name"
                    labelPlacement="outside"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.firstName ? errors.firstName : undefined
                    }
                    isRequired
                  />
                </div>
                <div data-aos="fade-left" data-aos-delay="350">
                  <Input
                    radius="none"
                    size="md"
                    type="text"
                    placeholder="Last name"
                    label="Last name"
                    labelPlacement="outside"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.lastName ? errors.lastName : undefined
                    }
                    isRequired
                  />
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <Input
                  name="email"
                  label="Email"
                  type="email"
                  labelPlacement="outside"
                  placeholder="Your email"
                  radius="none"
                  size="md"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email ? errors.email : ""}
                  isRequired
                />
              </div>
              <div data-aos="fade-up" data-aos-delay="450">
                <Input
                  name="phone"
                  label="Phone Number"
                  type="tel"
                  labelPlacement="outside"
                  placeholder="Your phone number"
                  radius="none"
                  size="md"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone ? errors.phone : ""}
                  isRequired
                />
              </div>

              <div data-aos="fade-up" data-aos-delay="500">
                <TextArea
                  name="message"
                  value={values.message}
                  placeholder="Your message"
                  label="Message"
                  onChange={handleChange}
                  minRows={6}
                  onBlur={handleBlur}
                  isRequired
                  error={touched.message ? errors.message : undefined}
                />
              </div>

              <div data-aos="fade-up" data-aos-delay="550">
                <Button
                  type="submit"
                  color="secondary"
                  fullWidth
                  size="md"
                  radius="none"
                >
                  Submit
                </Button>
              </div>
            </div>
            <div
              className="mt-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Link href="/location">
                <Button
                  size="md"
                  fullWidth
                  radius="none"
                  variant="light"
                  color="secondary"
                  endContent={<FaArrowRight />}
                >
                  SEE DIRECTIONS
                </Button>
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  </section>
}

export default Contact