import { useEditManually } from "../../hooks/useEditManually";
import { useRootStore } from "../../store/rootStore";
import Button from "../reusables/Button";
import ButtonGroup from "../reusables/ButtonGroup";
import Input from "../reusables/Input";
import TimezoneInfoDisplay from "./TimezoneInfoDisplay";

function AddTimezoneInfoForm() {
  const {
    addForm,
    submit,
    updateForm,
    addFieldErrors,
    addTimezoneInfo,
    resetAdd,
  } = useRootStore();
  const { canEditManually, checkbox } = useEditManually();

  return (
    <form className="col-start-3 col-end-4">
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Country Name"
          name="country"
          disabled={!canEditManually}
          value={addForm?.country}
          errors={addFieldErrors.country}
          handleChange={(value) => updateForm("country", value)}
        />
        <Input
          label="City Name"
          name="city"
          disabled={!canEditManually}
          value={addForm?.city}
          errors={addFieldErrors.city}
          handleChange={(value) => updateForm("city", value)}
        />
      </div>
      <Input
        label="Latitude"
        name="lat"
        disabled
        value={addForm?.lat?.toString()}
        errors={addFieldErrors.lat}
        handleChange={(value) => updateForm("lat", value)}
      />
      <Input
        label="Longitude"
        name="lng"
        disabled
        value={addForm?.lng?.toString()}
        errors={addFieldErrors.lng}
        handleChange={(value) => updateForm("lng", value)}
      />
      <Input
        label="Extra Note"
        name="note"
        value={addForm?.note}
        errors={addFieldErrors.note}
        handleChange={(value) => updateForm("note", value)}
      />
      {checkbox}
      <TimezoneInfoDisplay geoapifyTimezone={addTimezoneInfo} />
      <ButtonGroup>
        <Button
          onClick={(event) => {
            event.preventDefault();
            submit();
          }}
        >
          Submit
        </Button>
        <Button
          onClick={(event) => {
            event.preventDefault();
            resetAdd();
          }}
        >
          Reset
        </Button>
      </ButtonGroup>
    </form>
  );
}

export default AddTimezoneInfoForm;
