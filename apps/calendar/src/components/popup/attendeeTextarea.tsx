import { h } from 'preact';
import type { ChangeEventHandler } from 'preact/compat';

import { PopupSection } from '@src/components/popup/popupSection';
import { cls } from '@src/helpers/css';
import type { FormStateDispatcher } from '@src/hooks/popup/useFormState';
import { FormStateActionType } from '@src/hooks/popup/useFormState';
import { useStringOnlyTemplate } from '@src/hooks/template/useStringOnlyTemplate';

interface Props {
  location?: string;
  attendees?: string[];
  formStateDispatch: FormStateDispatcher;
}

const classNames = {
  popupSectionItem: cls('popup-section-item', 'popup-section-attendee'),
  attendeeIcon: cls('icon', 'ic-user-b'),
  attendee: cls('attendee'),
};

export function AttendeeTextarea({ attendees, formStateDispatch }: Props) {
  const attendeePlaceholder = useStringOnlyTemplate({
    template: 'attendeePlaceholder',
    defaultValue: 'Attendees',
  });
  const attendeesString = attendees ? attendees.join('; ') : '';
  return (
    <PopupSection>
      <div className={classNames.popupSectionItem}>
        <span className={classNames.attendeeIcon} />
        <textarea
          name="attendees"
          className={classNames.attendee}
          placeholder={attendeePlaceholder}
        >
          {attendeesString}
        </textarea>
      </div>
    </PopupSection>
  );
}
