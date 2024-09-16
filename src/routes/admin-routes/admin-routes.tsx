import React, { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AdminRoute } from 'src/routes/admin-routes/consts'
import { AdminLayout } from 'src/routes/admin-layout/admin-layout'

import { ProfileLayout } from 'src/pages/profile-layout/profile-layout'
import { AdminProfileMain } from 'src/pages/profile-layout/pages/admin-profile-main/admin-profile-main'
import { AdminProfileLists } from 'src/pages/profile-layout/pages/admin-profile-lists/admin-profile-lists'
import { AdminProfileTransport } from 'src/pages/profile-layout/pages/admin-profile-transport/admin-profile-transport'
import { AdminProfileGroups } from 'src/pages/profile-layout/pages/admin-profile-groups/admin-profile-groups'
import { AdminProfileEvents } from 'src/pages/profile-layout/pages/admin-profile-events/admin-profile-events'

import { AdminNewsList } from 'src/pages/admin-site/admin-news-list/admin-news-list'
import { AdminAddNews } from 'src/pages/admin-site/admin-add-news/admin-add-news'
import { AdminVideotapeList } from 'src/pages/admin-site/admin-videotape-list/admin-videotape-list'
import { AdminAddVideo } from 'src/pages/admin-site/admin-add-video/admin-add-video'
import { AdminRequests } from 'src/pages/admin-site/admin-requests/admin-requests'
import { AdminAboutContent } from 'src/pages/admin-site/admin-about-content/admin-about-content'

import { AdminCommunityAbout } from 'src/pages/admin-community-about/admin-community-about'
import { AdminCommunityHistory } from 'src/pages/admin-community-history/admin-community-history'
import { AdminCommunityComposition } from 'src/pages/admin-community-composition/admin-community-composition'
import { AdminCommunityContacts } from 'src/pages/admin-community-contacts/admin-community-contacts'
import { AdminCommunityDocuments } from 'src/pages/admin-community-documents/admin-community-documents'
import { AdminCommunityMediakit } from 'src/pages/admin-community-mediakit/admin-community-mediakit'
import { AdminCommunityPhotos } from 'src/pages/admin-community-photos/admin-community-photos'

import { AdminDepartmentsList } from 'src/pages/admin-departments-list/admin-departments-list'
import { AdminAddDepartments } from 'src/pages/admin-add-departments/admin-add-departments'

import { AdminParticipantsList } from 'src/pages/admin-participants-list/admin-participants-list'
import { AdminAddParticipant } from 'src/pages/admin-add-participant/admin-add-participant'

import { AdminObjectsList } from 'src/pages/admin-objects-list/admin-objects-list'
import { AdminAddObject } from 'src/pages/admin-add-object/admin-add-object'

import { AdminProjectsList } from 'src/pages/admin-projects-list/admin-projects-list'
import { AdminAddProject } from 'src/pages/admin-add-project/admin-add-project'

import { OneEventLayout } from 'src/pages/one-event-layout/one-event-layout'
import { AdminEventProfile } from 'src/pages/one-event-layout/pages/admin-event-profile/admin-event-profile'
import { AdminEventReg } from 'src/pages/one-event-layout/pages/admin-event-reg/admin-event-reg'
import { AdminEventTickets } from 'src/pages/one-event-layout/pages/admin-event-tickets/admin-event-tickets'
import { AdminEventContent } from 'src/pages/one-event-layout/pages/admin-event-content/admin-event-content'
import { AdminEventLocations } from 'src/pages/one-event-layout/pages/admin-event-locations/admin-event-locations'

import { EventTimetableLayout } from 'src/pages/one-event-layout/pages/event-timetable-layout/event-timetable-layout'
import { AdminEventTimetableList } from 'src/pages/one-event-layout/pages/event-timetable-layout/pages/admin-event-timetable-list/admin-event-timetable-list'
import { AdminEventTimetableEdit } from 'src/pages/one-event-layout/pages/event-timetable-layout/pages/admin-event-timetable-edit/admin-event-timetable-edit'
import { AdminEventPartners } from 'src/pages/one-event-layout/pages/admin-event-partners/admin-event-partners'
import { AdminEventPublication } from 'src/pages/one-event-layout/pages/admin-event-publication/admin-event-publication'
import { EventRostersLayout } from 'src/pages/one-event-layout/pages/event-rosters-layout/event-rosters-layout'

import { AdminVisitorsRosters } from 'src/pages/one-event-layout/pages/event-rosters-layout/pages/admin-visitors-rosters/admin-visitors-rosters'
import { AdminGroupsRosters } from 'src/pages/one-event-layout/pages/event-rosters-layout/pages/admin-groups-rosters/admin-groups-rosters'
import { AdminTransportRosters } from 'src/pages/one-event-layout/pages/event-rosters-layout/pages/admin-transport-rosters/admin-transport-rosters'
import { AdminEmployeesRosters } from 'src/pages/one-event-layout/pages/event-rosters-layout/pages/admin-employees-rosters/admin-employees-rosters'
import { AdminFoodRosters } from 'src/pages/one-event-layout/pages/event-rosters-layout/pages/admin-food-rosters/admin-food-rosters'
import { AdminListsRosters } from 'src/pages/one-event-layout/pages/event-rosters-layout/pages/admin-lists-rosters/admin-lists-rosters'

import { EventReportsLayout } from 'src/pages/one-event-layout/pages/event-reports-layout/event-reports-layout'
import { AdminPassReports } from 'src/pages/one-event-layout/pages/event-reports-layout/pages/admin-pass-reports/admin-pass-reports'
import { AdminFoodReports } from 'src/pages/one-event-layout/pages/event-reports-layout/pages/admin-food-reports/admin-food-reports'

import { EventsListLayout } from 'src/pages/events-list-layout/events-list-layout'
import { AdminEventsList } from 'src/pages/events-list-layout/pages/admin-events-list/admin-events-list'
import { AdminEventsPast } from 'src/pages/events-list-layout/pages/admin-events-past/admin-events-past'
import { AdminEventsUpcoming } from 'src/pages/events-list-layout/pages/admin-events-upcoming/admin-events-upcoming'
import { AdminEventsMain } from 'src/pages/events-list-layout/pages/admin-events-main/admin-events-main'
import { AdminEventsCanceled } from 'src/pages/events-list-layout/pages/admin-events-canceled/admin-events-canceled'

import { AdminMaterialsList } from 'src/pages/admin-materials-list/admin-materials-list'
import { AdminAddMaterial } from 'src/pages/admin-add-material/admin-add-material'

import { AdminProductList } from 'src/pages/admin-product-list/admin-product-list'
import { AdminSales } from 'src/pages/admin-sales/admin-sales'
import { AdminSupport } from 'src/pages/admin-support/admin-support'

import { AdminSettingsHome } from 'src/pages/admin-settings-home/admin-settings-home'
import { AdminSettingsFeedback } from 'src/pages/admin-settings-feedback/admin-settings-feedback'
import { AdminSettingsUsers } from 'src/pages/admin-settings-users/admin-settings-users'
import { AdminSettingsStructure } from 'src/pages/admin-settings-structure/admin-settings-structure'
import { AdminSettingsBlocks } from 'src/pages/admin-settings-blocks/admin-settings-blocks'

import { AdminOrganizerProfile } from 'src/pages/admin-organizer-profile/admin-organizer-profile'
import { AdminUserProfile } from 'src/pages/admin-user-profile/admin-user-profile'

export const AdminRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<AdminLayout />}>
				<Route path={AdminRoute.AdminProfile} element={<ProfileLayout />}>
					<Route index element={<AdminProfileMain />} />
					<Route path={AdminRoute.AdminProfileLists} element={<AdminProfileLists />} />
					<Route path={AdminRoute.AdminProfileTransport} element={<AdminProfileTransport />} />
					<Route path={AdminRoute.AdminProfileGroups} element={<AdminProfileGroups />} />
					<Route path={AdminRoute.AdminProfileEvents} element={<AdminProfileEvents />} />
				</Route>

				<Route path={AdminRoute.AdminNewsList} element={<AdminNewsList />} />
				<Route path={AdminRoute.AdminAddNews} element={<AdminAddNews />} />
				<Route path={AdminRoute.AdminVideotapeList} element={<AdminVideotapeList />} />
				<Route path={AdminRoute.AdminAddVideo} element={<AdminAddVideo />} />
				<Route path={AdminRoute.AdminRequestList} element={<AdminRequests />} />
				<Route path={AdminRoute.AdminAboutContent} element={<AdminAboutContent />} />

				<Route path={AdminRoute.AdminCommunityAbout} element={<AdminCommunityAbout />} />
				<Route path={AdminRoute.AdminCommunityHistory} element={<AdminCommunityHistory />} />
				<Route
					path={AdminRoute.AdminCommunityComposition}
					element={<AdminCommunityComposition />}
				/>
				<Route path={AdminRoute.AdminCommunityContacts} element={<AdminCommunityContacts />} />
				<Route path={AdminRoute.AdminCommunityDocuments} element={<AdminCommunityDocuments />} />
				<Route path={AdminRoute.AdminCommunityMediakit} element={<AdminCommunityMediakit />} />
				<Route path={AdminRoute.AdminCommunityPhotos} element={<AdminCommunityPhotos />} />

				<Route path={AdminRoute.AdminDepartmentsList} element={<AdminDepartmentsList />} />
				<Route path={AdminRoute.AdminAddDepartments} element={<AdminAddDepartments />} />

				<Route path={AdminRoute.AdminParticipantsList} element={<AdminParticipantsList />} />
				<Route path={AdminRoute.AdminAddParticipant} element={<AdminAddParticipant />} />

				<Route path={AdminRoute.AdminObjectsList} element={<AdminObjectsList />} />
				<Route path={AdminRoute.AdminAddObject} element={<AdminAddObject />} />

				<Route path={AdminRoute.AdminProjectsList} element={<AdminProjectsList />} />
				<Route path={AdminRoute.AdminAddProject} element={<AdminAddProject />} />

				<Route path={AdminRoute.AdminEventNew} element={<OneEventLayout />}>
					<Route index element={<AdminEventProfile />} />
					<Route path={AdminRoute.AdminEventReg} element={<AdminEventReg />} />
					<Route path={AdminRoute.AdminEventTickets} element={<AdminEventTickets />} />
					<Route path={AdminRoute.AdminEventContent} element={<AdminEventContent />} />
					<Route path={AdminRoute.AdminEventLocations} element={<AdminEventLocations />} />
					<Route path={AdminRoute.AdminEventTimetable} element={<EventTimetableLayout />}>
						<Route index element={<AdminEventTimetableList />} />
						<Route
							path={AdminRoute.AdminEventTimetableEdit}
							element={<AdminEventTimetableEdit />}
						/>
					</Route>
					<Route path={AdminRoute.AdminEventPartners} element={<AdminEventPartners />} />
					<Route path={AdminRoute.AdminEventPublication} element={<AdminEventPublication />} />
					<Route path={AdminRoute.AdminEventRosters} element={<EventRostersLayout />}>
						<Route index element={<AdminVisitorsRosters />} />
						<Route path={AdminRoute.AdminEventRostersGroups} element={<AdminGroupsRosters />} />
						<Route
							path={AdminRoute.AdminEventRostersTransport}
							element={<AdminTransportRosters />}
						/>
						<Route
							path={AdminRoute.AdminEventRostersEmployees}
							element={<AdminEmployeesRosters />}
						/>
						<Route path={AdminRoute.AdminEventRostersFood} element={<AdminFoodRosters />} />
						<Route path={AdminRoute.AdminEventRostersLists} element={<AdminListsRosters />} />
					</Route>
					<Route path={AdminRoute.AdminEventReports} element={<EventReportsLayout />}>
						<Route index element={<AdminPassReports />} />
						<Route path={AdminRoute.AdminEventReportsFood} element={<AdminFoodReports />} />
					</Route>
				</Route>
				<Route path={AdminRoute.AdminEventsList} element={<EventsListLayout />}>
					<Route index element={<AdminEventsList />} />
					<Route path={AdminRoute.AdminEventsPast} element={<AdminEventsPast />} />
					<Route path={AdminRoute.AdminEventsUpcoming} element={<AdminEventsUpcoming />} />
					<Route path={AdminRoute.AdminEventsMain} element={<AdminEventsMain />} />
					<Route path={AdminRoute.AdminEventsCanceled} element={<AdminEventsCanceled />} />
				</Route>

				<Route path={AdminRoute.AdminMaterialsList} element={<AdminMaterialsList />} />
				<Route path={AdminRoute.AdminAddMaterial} element={<AdminAddMaterial />} />

				<Route path={AdminRoute.AdminProductList} element={<AdminProductList />} />
				<Route path={AdminRoute.AdminSales} element={<AdminSales />} />

				<Route path={AdminRoute.AdminSupport} element={<AdminSupport />} />

				<Route path={AdminRoute.AdminSettingsHome} element={<AdminSettingsHome />} />
				<Route path={AdminRoute.AdminSettingsFeedback} element={<AdminSettingsFeedback />} />
				<Route path={AdminRoute.AdminSettingsUsers} element={<AdminSettingsUsers />} />
				<Route path={AdminRoute.AdminSettingsStructure} element={<AdminSettingsStructure />} />
				<Route path={AdminRoute.AdminSettingsBlocks} element={<AdminSettingsBlocks />} />

				<Route path={AdminRoute.AdminOrganizerProfile} element={<AdminOrganizerProfile />} />

				<Route path={AdminRoute.AdminUserProfile} element={<AdminUserProfile />} />
			</Route>
		</Routes>
	)
}
