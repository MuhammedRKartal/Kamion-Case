"use client";

import { Button } from "@/components/button";
import { logout } from "@/redux/actions/authActions";
import { useAppDispatch } from "@/redux/hooks";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Logout() {
  const dispatch = useAppDispatch();

  return (
    <Button
      appearance="bright"
      size="xs"
      className="text-primary"
      onClick={() => {
        dispatch(logout());
      }}
    >
      <div className="me-2 text-sm">Logout</div>
      <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl"></FontAwesomeIcon>
    </Button>
  );
}
