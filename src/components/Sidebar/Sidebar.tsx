import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { setType } from '../../features/filter/filterSlice';
const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const typeHandler = (type: string) => {
    dispatch(setType(type));
  };
  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <span
              role="button"
              onClick={() => typeHandler('')}
              className="main-menu menu-active"
              id="lws-alljobs-menu"
            >
              <i className="fa-solid fa-briefcase"></i>
              <span> All Available Jobs</span>
            </span>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <span
                  role="button"
                  onClick={() => typeHandler('Internship')}
                  className="sub-menu"
                  id="lws-internship-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                  Internship
                </span>
              </li>
              <li>
                <span
                  role="button"
                  onClick={() => typeHandler('Full Time')}
                  className="sub-menu"
                  id="lws-fulltime-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                  Full Time
                </span>
              </li>
              <li>
                <span
                  role="button"
                  onClick={() => typeHandler('Remote')}
                  className="sub-menu"
                  id="lws-remote-menu"
                >
                  <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                  Remote
                </span>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/jobs/add" className="main-menu" id="lws-addJob-menu">
              <i className="fa-solid fa-file-circle-plus"></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
