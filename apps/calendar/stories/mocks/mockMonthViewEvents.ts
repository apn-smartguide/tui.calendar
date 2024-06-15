import TZDate from '@src/time/date';
import { addDate } from '@src/time/datetime';

import type { MockedMonthViewEvents } from '@stories/mocks/types';

const DAYS_OF_WEEK = 7;

export function createMockMonthViewEvents(baseDate?: string): MockedMonthViewEvents[] {
  const today = baseDate ? new TZDate(baseDate) : new TZDate();
  const thisSunday = addDate(today, -today.getDay());
  const sundayDate = thisSunday.getDate();
  const sundayMonth = thisSunday.getMonth();
  const todayMonth = today.getMonth();
  const weekCount =
    sundayMonth !== todayMonth
      ? -1
      : Math.floor(
          sundayDate % DAYS_OF_WEEK ? sundayDate / DAYS_OF_WEEK : (sundayDate - 1) / DAYS_OF_WEEK
        );
  const firstSunday = addDate(thisSunday, -weekCount * DAYS_OF_WEEK);
  const firstTuesday = addDate(firstSunday, 2);
  const secondTuesday = addDate(firstTuesday, DAYS_OF_WEEK);
  const secondThursday = addDate(secondTuesday, 2);
  const thirdThursday = addDate(secondThursday, DAYS_OF_WEEK);
  const thirdSaturday = addDate(thirdThursday, 2);

  const mockMonthViewEvents = [
    {
      id: '0',
      calendarId: 'cal1',
      title: 'event1',
      start: firstSunday,
      end: secondTuesday,
    },
    {
      id: '1',
      calendarId: 'cal1',
      title: 'event2',
      start: secondTuesday,
      end: secondThursday,
    },
    {
      id: '2',
      calendarId: 'cal1',
      title: 'event3',
      start: thirdThursday,
      end: thirdSaturday,
    },
    {
      id: '3',
      calendarId: 'cal1',
      title: 'event - full',
      start: thirdThursday,
      end: thirdSaturday,
      location: 'This is location',
      attendees : ['dmichaud@alphinat.com', 'cpage@alphinat.com', 'hroussel@alphinat.com', 'felton@alphinat.com', 'mahtab@alphinat.com', 'ltran@alphinat.com', 'jeremy.boulet@alphinat.com'],
      body: '<html>\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n<meta name=\"Generator\" content=\"Microsoft Word 15 (filtered medium)\">\r\n<style>\r\n<!--\r\n@font-face\r\n\t{font-family:\"Cambria Math\"}\r\n@font-face\r\n\t{font-family:Aptos}\r\n@font-face\r\n\t{font-family:\"Segoe UI\"}\r\np.MsoNormal, li.MsoNormal, div.MsoNormal\r\n\t{margin:0in;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Aptos\",sans-serif}\r\na:link, span.MsoHyperlink\r\n\t{color:#467886;\r\n\ttext-decoration:underline}\r\nspan.me-email-text\r\n\t{}\r\nspan.me-email-text-secondary\r\n\t{}\r\nspan.EmailStyle20\r\n\t{}\r\n.MsoChpDefault\r\n\t{font-size:10.0pt}\r\n@page WordSection1\r\n\t{margin:1.0in 1.0in 1.0in 1.0in}\r\ndiv.WordSection1\r\n\t{}\r\n-->\r\n</style>\r\n</head>\r\n<body lang=\"EN-CA\" link=\"#467886\" vlink=\"#96607D\" style=\"word-wrap:break-word\">\r\n<div class=\"WordSection1\">\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n<div>\r\n<div style=\"margin-bottom:.25in; overflow:hidden\">\r\n<p class=\"MsoNormal\"><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#242424\">________________________________________________________________________________</span><span style=\"font-size:12.0pt; font-family:&quot;Segoe UI&quot;,sans-serif; color:#242424\"></span></p>\r\n</div>\r\n<div style=\"margin-bottom:9.0pt\">\r\n<p class=\"MsoNormal\"><span class=\"me-email-text\"><b><span style=\"font-size:18.0pt; font-family:&quot;Segoe UI&quot;,sans-serif; color:#242424\">Microsoft Teams</span></b></span><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#242424\">\r\n<a href=\"https://aka.ms/JoinTeamsMeeting?omkt=en-US\"><span style=\"font-size:10.5pt; color:#5B5FC7\">Need help?</span></a>\r\n</span></p>\r\n</div>\r\n<div style=\"margin-bottom:4.5pt\">\r\n<p class=\"MsoNormal\"><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#242424\"><a href=\"https://teams.microsoft.com/l/meetup-join/19%3ameeting_YWY5Njk2ZjMtODEyYS00ZGYyLWJmNDktYzhjYTMxZWIzYmNk%40thread.v2/0?context=%7b%22Tid%22%3a%223ab517e3-abaa-46b8-82cc-9b128f27be22%22%2c%22Oid%22%3a%223520daa7-9367-443c-9a59-22cf06952ab0%22%7d\"><b><span style=\"font-size:15.0pt; color:#5B5FC7\">Join\r\n the meeting now</span></b></a> </span></p>\r\n</div>\r\n<div style=\"margin-bottom:4.5pt\">\r\n<p class=\"MsoNormal\"><span class=\"me-email-text-secondary\"><span style=\"font-size:10.5pt; font-family:&quot;Segoe UI&quot;,sans-serif; color:#616161\">Meeting ID:\r\n</span></span><span class=\"me-email-text\"><span style=\"font-size:10.5pt; font-family:&quot;Segoe UI&quot;,sans-serif; color:#242424\">259 691 972 043</span></span><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#242424\">\r\n</span></p>\r\n</div>\r\n<div style=\"margin-bottom:.25in\">\r\n<p class=\"MsoNormal\"><span class=\"me-email-text-secondary\"><span style=\"font-size:10.5pt; font-family:&quot;Segoe UI&quot;,sans-serif; color:#616161\">Passcode:\r\n</span></span><span class=\"me-email-text\"><span style=\"font-size:10.5pt; font-family:&quot;Segoe UI&quot;,sans-serif; color:#242424\">mq7dNv</span></span><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#242424\">\r\n</span></p>\r\n</div>\r\n<div style=\"margin-bottom:.25in\">\r\n<div class=\"MsoNormal\" align=\"center\" style=\"text-align:center\"><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#242424\">\r\n<hr size=\"0\" width=\"100%\" align=\"center\">\r\n</span></div>\r\n</div>\r\n<div>\r\n<p class=\"MsoNormal\"><span class=\"me-email-text-secondary\"><span style=\"font-size:10.5pt; font-family:&quot;Segoe UI&quot;,sans-serif; color:#616161\">For organizers:\r\n</span></span><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#242424\"><a href=\"https://teams.microsoft.com/meetingOptions/?organizerId=3520daa7-9367-443c-9a59-22cf06952ab0&amp;tenantId=3ab517e3-abaa-46b8-82cc-9b128f27be22&amp;threadId=19_meeting_YWY5Njk2ZjMtODEyYS00ZGYyLWJmNDktYzhjYTMxZWIzYmNk@thread.v2&amp;messageId=0&amp;language=en-US\"><span style=\"font-size:10.5pt; color:#5B5FC7\">Meeting\r\n options</span></a> </span><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#D1D1D1\">|</span><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#242424\">\r\n<a href=\"https://dialin.teams.microsoft.com/usp/pstnconferencing\"><span style=\"font-size:10.5pt; color:#5B5FC7\">Reset dial-in PIN</span></a>\r\n</span></p>\r\n</div>\r\n<div style=\"margin-bottom:.25in; overflow:hidden\">\r\n<p class=\"MsoNormal\"><span style=\"font-family:&quot;Segoe UI&quot;,sans-serif; color:#242424\">________________________________________________________________________________</span></p>\r\n</div>\r\n</div>\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n</div>\r\n</body>\r\n</html>\r\n',
    },
  ];

  for (let i = 0; i < 10; i += 1) {
    mockMonthViewEvents.push({
      id: `${i}${i}`,
      calendarId: 'cal2',
      title: `event2-${i}`,
      start: secondTuesday,
      end: secondThursday,
    });
  }

  return mockMonthViewEvents;
}

export const mockMonthViewEvents = createMockMonthViewEvents();

// For E2E tests, set the base date in order to guarantee the same events are returned
export const MOCK_MONTH_VIEW_BASE_DATE = '2022-04-01';
export const mockMonthViewEventsFixed = createMockMonthViewEvents(MOCK_MONTH_VIEW_BASE_DATE);
