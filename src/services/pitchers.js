import axios from "axios";
import { pitcherProfile, pitcherReg, pitcherRegCheck } from "../constants";

export class pitcherService {
  constructor() {}

  checkRegistration = async (token) =>
    (
      await axios.get(pitcherRegCheck, {
        headers: { "x-firebase-token": token },
      })
    ).data;

  getProfile = async (token) =>
    (
      await axios.get(pitcherProfile, {
        headers: { "x-firebase-token": token },
      })
    ).data;

  register = async (token, dataPayload) =>
    await axios.post(pitcherReg, dataPayload, {
      headers: {
        "x-firebase-token": token,
      },
    });
}
