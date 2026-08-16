import {
  onDomainCustomerResponses,
  onGetAllDomainBookings,
} from "@/actions/appointment";
import PortalForm from "@/components/forms/portal/portal-form";

type Props = { params: Promise<{ domainId: string; customerId: string }> };

const CustomerSignUpForm = async ({ params }: Props) => {
  const { customerId, domainId } = await params;

  const questions = await onDomainCustomerResponses(customerId);
  const bookings = await onGetAllDomainBookings(domainId);

  if (!questions) return null;

  return (
    <PortalForm
      bookings={bookings}
      email={questions.email!}
      domainId={domainId}
      customerId={customerId}
      questions={questions.questions}
      type="Appointment"
    />
  );
};

export default CustomerSignUpForm;
