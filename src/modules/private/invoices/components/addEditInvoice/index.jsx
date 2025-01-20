import { motion, AnimatePresence } from "framer-motion";
import {
  Button,
  CustomDatePicker,
  CustomInput,
  PaymentTermsDropdown,
} from "../../../../../generalComponents";
import { useForm } from "react-hook-form";

export const AddEditInvoice = ({
  isEdit = false,
  isOpen,
  setIsOpen,
  invoice,
}) => {
  const variants = {
    closed: {
      opacity: 0,
      width: 0,
    },
    open: {
      opacity: 1,
      width: "auto",
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("errors", errors);
    console.log("Data", data);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div
            className="fixed top-[72px] left-0 right-0 bottom-0 md:top-[80px]  lg:top-0 lg:left-[103px] bg-black/50"
            onClick={() => setIsOpen(false)}
          ></div>
          <motion.form
            initial={"closed"}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            exit={"closed"}
            className="min-h-[calc(100vh-72px)] overflow-y-auto w-96 bg-white dark:bg-dark-700 fixed top-[72px] left-0 right-0 bottom-0 md:top-[80px] md:right-auto lg:top-0 lg:left-[103px] px-6 py-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <Button
                variant="back"
                label="Go Back"
                onClick={() => setIsOpen(false)}
              />
            </div>

            <div>
              {isEdit ? (
                <div className="text-[24px] leading-[32px] font-bold mt-[26px] mb-[22px]">
                  Edit{" "}
                  <span>
                    <span>#</span>
                    {invoice?.id}
                  </span>
                </div>
              ) : (
                <div className="text-[24px] leading-[32px] font-bold mt-[26px] mb-[22px]">
                  New Invoice
                </div>
              )}
            </div>

            <div>
              <p className="text-heading-sm-variant font-bold text-primary">
                Bill from
              </p>
              <div className="mt-6">
                <CustomInput
                  label="Street Address"
                  register={register}
                  validationRules={{ required: "Can't be empty" }}
                  name="senderAddress.street"
                  error={errors?.senderAddress?.street?.message}
                />
              </div>

              <div className="flex flex-col gap-6 md:flex-row mt-6">
                <div className="flex items-center gap-6">
                  <div className="flex-1">
                    <CustomInput
                      label="City"
                      register={register}
                      validationRules={{ required: "Can't be empty" }}
                      name="senderAddress.city"
                      error={errors?.senderAddress?.city?.message}
                    />
                  </div>
                  <div className="flex-1">
                    <CustomInput
                      label="Post Code"
                      register={register}
                      validationRules={{ required: "Can't be empty" }}
                      name="senderAddress.postCode"
                      error={errors?.senderAddress?.postCode?.message}
                    />
                  </div>
                </div>
                <CustomInput
                  label="Country"
                  register={register}
                  validationRules={{ required: "Can't be empty" }}
                  name="senderAddress.country"
                  error={errors?.senderAddress?.country?.message}
                />
              </div>
            </div>

            <div className="mt-10">
              <p className="text-heading-sm-variant font-bold text-primary">
                Bill to
              </p>
              <div className="mt-6">
                <CustomInput
                  label="Client's Name"
                  register={register}
                  validationRules={{ required: "Can't be empty" }}
                  name="clientName"
                  error={errors?.clientName?.message}
                />
              </div>

              <div className="mt-6">
                <CustomInput
                  label="Client's Email"
                  register={register}
                  validationRules={{ required: "Can't be empty" }}
                  name="clientEmail"
                  error={errors?.clientEmail?.message}
                />
              </div>

              <div className="mt-6">
                <CustomInput
                  label="Street Address"
                  register={register}
                  validationRules={{ required: "Can't be empty" }}
                  name="clientAddress.street"
                  error={errors?.clientAddress?.street?.message}
                />
              </div>

              <div className="flex flex-col gap-6 md:flex-row mt-6">
                <div className="flex items-center gap-6">
                  <div className="flex-1">
                    <CustomInput
                      label="City"
                      register={register}
                      validationRules={{ required: "Can't be empty" }}
                      name="clientAddress.city"
                      error={errors?.clientAddress?.city?.message}
                    />
                  </div>
                  <div className="flex-1">
                    <CustomInput
                      label="Post Code"
                      register={register}
                      validationRules={{ required: "Can't be empty" }}
                      name="clientAddress.postCode"
                      error={errors?.clientAddress?.postCode?.message}
                    />
                  </div>
                </div>
                <CustomInput
                  label="Country"
                  register={register}
                  validationRules={{ required: "Can't be empty" }}
                  name="clientAddress.country"
                  error={errors?.clientAddress?.country?.message}
                />
              </div>
            </div>

            <div>
              <div>Invoice Date</div>
              <CustomDatePicker />
            </div>

            <div className="w-full">
              <PaymentTermsDropdown />
            </div>

            <div className="mt-6">
              <CustomInput
                label="Project / Description"
                register={register}
                validationRules={{ required: "Can't be empty" }}
                name="description"
                error={errors?.description?.message}
              />
            </div>
            <div>
              <Button label="Create" type="submit" />
            </div>
          </motion.form>
        </>
      )}
    </AnimatePresence>
  );
};
