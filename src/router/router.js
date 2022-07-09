import Home from '../components/Home.vue'
import AboutUs from '../components/AboutUs.vue'
import ContactUs from '../components/ContactUs.vue'
import Awards from '../components/Awards.vue'
import Journals from '../components/Publication/Journals.vue'
import SpecialIssues from '../components/Publication/SpecialIssues.vue'
import MembersPapers from '../components/Publication/MembersPapers.vue'
import JobsOpportunities from '../components/JobsOpportunities.vue'
import JoinUs from '../components/JoinUs.vue'
import Events from '../components/Events.vue'
import Login from '../components/Login.vue'
import BoardMembers from '../components/BoardMembers.vue'
import _2020_1 from '../components/Events/2020/1.vue'
import _2021_1 from '../components/Events/2021/1.vue'
import _2021_2 from '../components/Events/2021/2.vue'
import _2021_3 from '../components/Events/2021/3.vue'
import UserSpace from '../components/UserSpace.vue'
import MemberSpace from '../components/MemberSpace.vue'


export default [
  { path: "/", component: Home, meta: { title: 'YGWG of AGA - Young Geographer Working Group of Asian Geographical Association (AGA)' } },
  { path: "/Home", component: Home, meta: { title: 'YGWG of AGA - Young Geographer Working Group of Asian Geographical Association (AGA)' } },
  { path: '/AboutUs', component: AboutUs, meta: { title: 'YGWG of AGA - Young Geographer Working Group of Asian Geographical Association (AGA)' } },
  { path: '/ContactUs', component: ContactUs, meta: { title: 'YGWG of AGA - Young Geographer Working Group of Asian Geographical Association (AGA)' } },
  { path: '/Awards', component: Awards, meta: { title: 'YGWG of AGA - Young Geographer Working Group of Asian Geographical Association (AGA)' } },
  { path: '/Publication/Journals', component: Journals, meta: { title: 'YGWG of AGA - Young Geographer Working Group of Asian Geographical Association (AGA)' } },
  { path: '/Publication/SpecialIssues', component: SpecialIssues, meta: { title: 'YGWG of AGA - Young Geographer Working Group of Asian Geographical Association (AGA)' } },
  { path: '/Publication/MembersPapers', component: MembersPapers, meta: { title: 'YGWG of AGA - Young Geographer Working Group of Asian Geographical Association (AGA)' } },
  { path: '/JobsOpportunities', component: JobsOpportunities, meta: { title: 'YGWG of AGA - Young Geographer Working Group of Asian Geographical Association (AGA)' } },
  { path: '/JoinUs', component: JoinUs, meta: { title: 'YGWG of AGA - Young Geographer Working Group of Asian Geographical Association (AGA)' } },
  { path: '/Events', component: Events, meta: { title: 'YGWG of AGA - Young Geographer Working Group of Asian Geographical Association (AGA)' } },
  { path: '/Login', component: Login, meta: { title: 'YGWG of AGA - Young Geographer Working Group of Asian Geographical Association (AGA)' } },
  { path: '/Events/2020/1', component: _2020_1, meta: { title: 'YGWG of AGA - Young Geographer Working Group of Asian Geographical Association (AGA)' } },
  { path: '/Events/2021/1', component: _2021_1, meta: { title: 'YGWG of AGA - Young Geographer Working Group of Asian Geographical Association (AGA)' } },
  { path: '/Events/2021/2', component: _2021_2, meta: { title: 'YGWG of AGA - Young Geographer Working Group of Asian Geographical Association (AGA)' } },
  { path: '/Events/2021/3', component: _2021_3, meta: { title: 'YGWG of AGA - Young Geographer Working Group of Asian Geographical Association (AGA)' } },
  { path: '/UserSpace', component: UserSpace, meta: { title: 'YGWG of AGA - Young Geographer Working Group of Asian Geographical Association (AGA)' } },
  { path: '/MemberSpace', component: MemberSpace, meta: { title: 'YGWG of AGA - Young Geographer Working Group of Asian Geographical Association (AGA)' } },
  { path: '/BoardMembers', component: BoardMembers, meta: { title: 'YGWG of AGA - Young Geographer Working Group of Asian Geographical Association (AGA)' } }
]