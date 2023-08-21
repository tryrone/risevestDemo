import HapticFeedback, {
  HapticFeedbackTypes,
} from 'react-native-haptic-feedback';

interface HapticOptions {
  type?: HapticFeedbackTypes;
  force?: boolean;
}

export function hapticFeedback({
  type = HapticFeedbackTypes.impactLight,
  force = false,
}: HapticOptions = {}): void {
  HapticFeedback.trigger(type, {
    enableVibrateFallback: force,
    ignoreAndroidSystemSettings: force,
  });
}
