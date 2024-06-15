import { h } from 'preact';
import type { ChangeEventHandler } from 'preact/compat';

import { PopupSection } from '@src/components/popup/popupSection';
import { cls } from '@src/helpers/css';
import type { FormStateDispatcher } from '@src/hooks/popup/useFormState';
import { FormStateActionType } from '@src/hooks/popup/useFormState';
import { useStringOnlyTemplate } from '@src/hooks/template/useStringOnlyTemplate';

interface Props {
  body?: string;
  formStateDispatch: FormStateDispatcher;
}

const classNames = {
  popupSectionItem: cls('popup-section-item', 'popup-section-event-body'),
  eventBodyIcon: cls('icon', 'ic-edit'),
  eventBody: cls('event-body'),
};

export function EventBodyTextarea({ body, formStateDispatch }: Props) {
  const eventBodyPlaceholder = useStringOnlyTemplate({
    template: 'eventBodyPlaceholder',
    defaultValue: 'Detail',
  });
  return (
    <PopupSection>
      <div className={classNames.popupSectionItem}>
        <span className={classNames.eventBodyIcon} />
        <textarea
          name="body"
          className={classNames.eventBody}
          placeholder={eventBodyPlaceholder}
        >
          {body}
        </textarea>
      </div>
    </PopupSection>
  );
}
