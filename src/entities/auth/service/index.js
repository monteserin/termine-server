import { ManagementClient, verifyAuthToken } from '../auth0';
import StudentModel from '../../student/model';
import TeacherModel from '../../teacher/model';


const AuthService = () => ({
    async signIn(providerToken, isTeacher) {
        const { id, email_verified, given_name, picture } = await verifyAuthToken(providerToken);

        const Model = isTeacher ? TeacherModel : StudentModel

        const user = await Model.findOrCreate({auth0Id:id}, {auth0Id: id, name: given_name, picture});

        return { user, verified: email_verified };
    },
    deleteUser(userProviderId) {
        return ManagementClient.deleteUser({ id: userProviderId });
    },
});

export default AuthService;