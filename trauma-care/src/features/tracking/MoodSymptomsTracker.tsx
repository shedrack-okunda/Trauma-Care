import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  TextField,
  Slider,
  Grid,
  Paper,
  Chip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MoodIcon from "@mui/icons-material/Mood";
import ListAltIcon from "@mui/icons-material/ListAlt";

type Mood =
  | "Happy"
  | "Calm"
  | "Sad"
  | "Anxious"
  | "Angry"
  | "Numb"
  | "Hopeful"
  | "Overwhelmed";

type Symptom =
  | "Insomnia"
  | "Fatigue"
  | "Headache"
  | "Nausea"
  | "Muscle Tension"
  | "Racing Thoughts"
  | "Appetite Changes"
  | "Panic Attacks"
  | "Flashbacks"
  | "Dissociation";

export const MoodSymptoms: React.FC = () => {
  const [showMoodTracker, setShowMoodTracker] = useState(false);
  const [showSymptomLogger, setShowSymptomLogger] = useState(false);
  const [selectedMood, setSelectedMood] = useState<Mood | "">("");
  const [moodIntensity, setMoodIntensity] = useState(5);
  const [moodNote, setMoodNote] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<Symptom[]>([]);
  const [symptomNote, setSymptomNote] = useState("");

  const toggleMoodTracker = () => {
    setShowMoodTracker(!showMoodTracker);
    if (showSymptomLogger) setShowSymptomLogger(false);
  };

  const toggleSymptomLogger = () => {
    setShowSymptomLogger(!showSymptomLogger);
    if (showMoodTracker) setShowMoodTracker(false);
  };

  const moodOptions: Mood[] = [
    "Happy",
    "Calm",
    "Sad",
    "Anxious",
    "Angry",
    "Numb",
    "Hopeful",
    "Overwhelmed",
  ];
  const symptomOptions: Symptom[] = [
    "Insomnia",
    "Fatigue",
    "Headache",
    "Nausea",
    "Muscle Tension",
    "Racing Thoughts",
    "Appetite Changes",
    "Panic Attacks",
    "Flashbacks",
    "Dissociation",
  ];

  const handleMoodSelection = (mood: Mood) => setSelectedMood(mood);

  const saveMoodEntry = () => {
    console.log("Saving mood:", {
      mood: selectedMood,
      intensity: moodIntensity,
      note: moodNote,
    });
    setSelectedMood("");
    setMoodIntensity(5);
    setMoodNote("");
    setShowMoodTracker(false);
    alert("Mood logged successfully!");
  };

  const handleSymptomSelection = (symptom: Symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s: string) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const saveSymptomEntry = () => {
    console.log("Saving symptoms:", {
      symptoms: selectedSymptoms,
      note: symptomNote,
    });
    setSelectedSymptoms([]);
    setSymptomNote("");
    setShowSymptomLogger(false);
    alert("Symptoms logged successfully!");
  };

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} mb={2}>
        <Grid size={{ xs: 6 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={toggleMoodTracker}
            startIcon={<MoodIcon />}
          >
            Track Mood
          </Button>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={toggleSymptomLogger}
            startIcon={<ListAltIcon />}
          >
            Log Symptoms
          </Button>
        </Grid>
      </Grid>

      {showMoodTracker && (
        <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">How are you feeling?</Typography>
            <IconButton onClick={toggleMoodTracker}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Grid container spacing={1} mt={2}>
            {moodOptions.map((mood) => (
              <Grid size={{ xs: 3 }} key={mood}>
                <Chip
                  label={mood}
                  onClick={() => handleMoodSelection(mood)}
                  color={selectedMood === mood ? "primary" : "default"}
                  variant={selectedMood === mood ? "filled" : "outlined"}
                  sx={{ width: "100%" }}
                />
              </Grid>
            ))}
          </Grid>

          {selectedMood && (
            <>
              <Box mt={3}>
                <Typography variant="body2">Intensity (1-10)</Typography>
                <Slider
                  value={moodIntensity}
                  onChange={(e, val) => setMoodIntensity(val as number)}
                  min={1}
                  max={10}
                />
                <Typography align="center" variant="body1">
                  {moodIntensity}
                </Typography>
              </Box>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Notes (optional)"
                value={moodNote}
                onChange={(e) => setMoodNote(e.target.value)}
                margin="normal"
              />
              <Button variant="contained" fullWidth onClick={saveMoodEntry}>
                Save Mood Entry
              </Button>
            </>
          )}
        </Paper>
      )}

      {showSymptomLogger && (
        <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Log Your Symptoms</Typography>
            <IconButton onClick={toggleSymptomLogger}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography variant="body2" mt={2} mb={1}>
            Select all that apply:
          </Typography>
          <Grid container spacing={1}>
            {symptomOptions.map((symptom) => (
              <Grid size={{ xs: 6 }} key={symptom}>
                <Chip
                  label={symptom}
                  onClick={() => handleSymptomSelection(symptom)}
                  color={
                    selectedSymptoms.includes(symptom) ? "secondary" : "default"
                  }
                  variant={
                    selectedSymptoms.includes(symptom) ? "filled" : "outlined"
                  }
                  sx={{ width: "100%" }}
                />
              </Grid>
            ))}
          </Grid>

          <TextField
            fullWidth
            multiline
            rows={3}
            label="Additional Notes (optional)"
            value={symptomNote}
            onChange={(e) => setSymptomNote(e.target.value)}
            margin="normal"
          />
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={saveSymptomEntry}
          >
            Save Symptom Entry
          </Button>
        </Paper>
      )}
    </Box>
  );
};
