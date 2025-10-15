
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import AdminDashboardClient from './AdminDashboardClient';


async function  AdminPage() {
const user= await currentUser();

// user is not logged in
if(!user) redirect("/");
const adminEmail=process.env.ADMIN_EMAIL;
console.log("Admin email from env:",adminEmail);

const userEmail=user.emailAddresses[0]?.emailAddress;
console.log("Current user email:",userEmail);
// user is not admin
if(!adminEmail||userEmail!==adminEmail) redirect("/dashboard");

  return <AdminDashboardClient/>;
}

export default  AdminPage
